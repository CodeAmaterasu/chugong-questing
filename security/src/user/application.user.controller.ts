import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ApplicationUserService } from './application.user.service';
import { JwtService } from '@nestjs/jwt';
import { ApplicationUser } from './schemas/application.user.schema';
import { ResponseEnvelope } from '../common/response.envelope';
import { ResponseErrorMessages } from '../common/response.error.messages';

/**
 * Controller for user authentication
 */
@Controller('user')
export class ApplicationUserController {
  constructor(
    private readonly userService: ApplicationUserService,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * registers a new user
   * @param user user to register
   * @return the created user
   */
  @Post()
  async register(@Body() user: ApplicationUser) {
    // Checks if username is already used
    const usernameFound = await this.userService.usernameExists(user.username);
    if (usernameFound) {
      throw new HttpException(
        ResponseErrorMessages.USER_USERNAME_IN_USE,
        HttpStatus.FORBIDDEN,
      );
    }

    // Checks if email is already used
    const emailFound = await this.userService.emailExists(user.email);
    if (emailFound) {
      throw new HttpException(
        ResponseErrorMessages.USER_EMAIL_IN_USE,
        HttpStatus.FORBIDDEN,
      );
    }

    // Tries to create a user
    const createdUser = await this.userService.create(user);
    if (createdUser == null) {
      throw new HttpException(
        ResponseErrorMessages.USER_NOT_CREATED,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return new ResponseEnvelope(createdUser);
  }

  /**
   * Tries to log in a user with given credentials and generates a Json Web Token (JWT)
   * @param username username of user to login
   * @param password password of user to login
   * @return A generated Json Web token (JWT) for given user
   */
  @Get()
  async login(@Query('username') username: string, @Query('password') password: string) {
    // Checks if user with given credentials
    const foundUser = await this.userService.login(username, password);
    if (foundUser == null) {
      throw new HttpException(
        ResponseErrorMessages.USER_NOT_FOUND_WITH_CREDENTIALS,
        HttpStatus.UNAUTHORIZED,
      );
    }

    const payload = { username: foundUser.username, id: foundUser._id };
    return new ResponseEnvelope({
      token: this.jwtService.sign(payload),
    });
  }
}
