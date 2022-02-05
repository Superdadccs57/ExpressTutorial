const Job = require("../models/Job");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError, BadRequestError } = require("../errors");

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userID }).sort("createdAt");
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
};
const getJob = async (req, res) => {
  res.send("get a job");
};
const createJob = async (req, res) => {
  req.body.createdBy = req.user.userID;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json(job);
};
const updateJob = async (req, res) => {
  res.send("update a job");
};
const deleteJob = async (req, res) => {
  res.send("delete a job");
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
