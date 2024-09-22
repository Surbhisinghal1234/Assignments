
import mongoose from 'mongoose';

const assetSchema = new mongoose.Schema({
    asset_id: { type: Number, required: true },
    asset_title: { type: String, required: true },
    asset_description: { type: String, required: true },
    asset_content: { type: String, required: true },
    asset_type: { type: String, required: true },
    asset_content_type: { type: String, required: true }
});

const taskSchema = new mongoose.Schema({
    task_id: { type: Number, required: true },
    task_title: { type: String, required: true },
    task_description: { type: String, required: true },
    status: { type: String, required: true },
    assets: [assetSchema]
});

const projectSchema = new mongoose.Schema({
    _key: { type: String, required: true },
    category: { type: String, required: true },
    cid: { type: Number, default: NaN },
    title: { type: String, required: true },
    commitment: { type: String, required: true },
    commitment_type: { type: String, required: true },
    deadline: { type: String, default: "" },
    description: { type: String, required: true },
    faqs: { type: [String], default: [] },
    globalTags: { type: [String], default: [] },
    isActive: { type: Boolean, default: true },
    lastposttime: { type: Number, default: 0 },
    learning_outcomes: { type: [String], required: true },
    mainPid: { type: Number, default: 0 },
    postcount: { type: Number, default: 0 },
    pre_requisites: { type: [String], required: true },
    project_image: { type: String, required: true },
    short_description: { type: String, required: true },
    slug: { type: String, required: true },
    status: { type: String, required: true },
    tasks: [taskSchema],
    tid: { type: Number, required: true },
    timestamp: { type: Number, required: true },
    uid: { type: Number, required: true },
    viewcount: { type: Number, default: 0 },
    publishedAt: { type: Number, required: true },
    type: { type: String, required: true }
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
