import {Reward} from "./reward";
import {Quest} from "../schemas/quest.schema";
import { Types } from "mongoose";

export class QuestDto {
    name: string;
    description: string;
    image: string;
    reward: Reward[];
    published: boolean;
    applicationUserId: string;

    toQuest(): Quest {
        const quest = new Quest();
        quest.applicationUserId = new Types.ObjectId(this.applicationUserId);
        quest.description = this.description;
        quest.image = this.image;
        let reward = new Map<string, number>;
        for (let item of this.reward) {
            reward.set(item.skill, item.xp);
        }
        quest.reward = reward
        return quest;
    }
}