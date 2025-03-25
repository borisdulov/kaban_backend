import mongoose, { Schema, SchemaType, model } from "mongoose";
import { ProjectPrivacy } from "../../domain/entity/project_privacy_enum";
import { Project } from "../../domain/entity/project_entity";

export const projectSchemaTitle = "Project";

const projectSchema = new Schema<Project>({
    name: {
        type: String,
        required: true
    },
    description: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
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

export const ProjectModel = mongoose.model(projectSchemaTitle, projectSchema);