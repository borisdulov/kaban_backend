import mongoose, { Schema, SchemaType, model } from "mongoose";
import { ProjectPrivacy } from "../../domain/entity/project_privacy_enum";
import { Project } from "../../domain/entity/project_entity";

const projectSchema = new Schema<Project>({
    name: {
        type: String,
        required: true
    },
    description: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    owner: {
        type: String,
        required: true
    },
    members: [{
        type: String,
        required: true
    }],
    privacy: {
        type: String,
        enum: Object.values(ProjectPrivacy),
        default: ProjectPrivacy.Private
    }
}, {
    timestamps: true
})

export const ProjectModel = mongoose.model('Project', projectSchema);