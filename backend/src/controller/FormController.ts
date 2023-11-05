import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { FormDef } from "../entity/FormDef"

export class FormController {

    private formRepository = AppDataSource.getRepository(FormDef)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.formRepository.find()
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { firstName, lastName, age } = request.body;

        const formData = Object.assign(new FormDef(), {
            firstName,
            lastName,
            age
        })

        return this.formRepository.save(formData)
    }

}