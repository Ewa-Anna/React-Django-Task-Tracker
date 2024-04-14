import axios from "axios"
import clientApi from "../axios";

export const getAllProjects = async ({ limit = 10 }) => {

    try {
        const config = {
            withCredentials: true,
        }

        const response = await axios.get(`http://127.0.0.1:8000/task-tracker/v1/task/projects/?limit=${limit}`, config)

        return response.data;
    } catch (error) {
        console.log(error)
        if (axios.isAxiosError(error)) {
            console.log('error message:', error.message)
            throw new Error(error.message);
        } else {
            console.log("undexpected error", error)
            throw new Error("An unexpected error ocured")
        }
    }
}

export const getProjectDetails = async ({ id }) => {

    try {
        const config = {
            withCredentials: true,
        }

        const response = await axios.get(`http://127.0.0.1:8000/task-tracker/v1/task/projects/${id}`, config)

        return response.data;
    } catch (error) {
        console.log(error)
        if (axios.isAxiosError(error)) {
            console.log('error message:', error.message)
            throw new Error(error.message);
        } else {
            console.log("undexpected error", error)
            throw new Error("An unexpected error ocured")
        }
    }
}


export const getTags = async () => {

    try {
        const config = {
            withCredentials: true,
        }

        const response = await axios.get(`http://127.0.0.1:8000/task-tracker/v1/tags/`, config)

        return response.data;
    } catch (error) {
        console.log(error)
        if (axios.isAxiosError(error)) {
            console.log('error message:', error.message)
            throw new Error(error.message);
        } else {
            console.log("undexpected error", error)
            throw new Error("An unexpected error ocured")
        }
    }
}

export const getVisibilityOptions = async () => {
    try {
        const config = {
            withCredentials: true,
        }

        const response = await axios.get(`http://127.0.0.1:8000/task-tracker/v1/task/dropdown-list/visibility`, config)

        return response.data;
    } catch (error) {
        console.log(error)
        if (axios.isAxiosError(error)) {
            console.log('error message:', error.message)
            throw new Error(error.message);
        } else {
            console.log("undexpected error", error)
            throw new Error("An unexpected error ocured")
        }
    }
}

export const createNewProject = async ({ formData }) => {
    try {


        const response = await clientApi.post(`http://127.0.0.1:8000/task-tracker/v1/task/projects/`, formData)

        return response.data;
    } catch (error) {
        console.log(error)
        if (axios.isAxiosError(error)) {
            console.log('error message:', error.message)
            throw new Error(error.message);
        } else {
            console.log("undexpected error", error)
            throw new Error("An unexpected error ocured")
        }
    }
}