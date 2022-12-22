import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ApplicationUser, UserDocument } from './schemas/application.user.schema';

/**
 * Service for user-related actions
 */
@Injectable()
export class ApplicationUserService {
  /**
   * constructor
   * @param userModel
   */
  constructor(@InjectModel(ApplicationUser.name) private userModel: Model<UserDocument>) {}

  /**
   * tries to find given username in the database
   * @param username username of user to find
   * @return Indicates whether the username was found or not
   */
  async usernameExists(username: string): Promise<boolean> {
    const user = await this.userModel.findOne({ username: username });
    return user != null;
  }

  /**
   * tries to find given email in the database
   * @param email email of user to find
   * @return Indicates whether the email was found or not
   */
  async emailExists(email: string): Promise<boolean> {
    const user = await this.userModel.findOne({ email: email });
    return user != null;
  }

  /**
   * Creates a new user in the database
   * @param user user to create
   * @return created user
   */
  async create(user: ApplicationUser): Promise<ApplicationUser> {
    const createdUser = await new this.userModel(user);
    return createdUser.save();
  }

  /**
   * Tries to log in a user with given credentials
   * @param username username of user to log in
   * @param password password of user to log in
   * @return entire user entry in the database with given credentials
   */
  async login(username: string, password: string): Promise<ApplicationUser> {
    return this.userModel.findOne({ username: username, password: password }).exec();
  }
}
