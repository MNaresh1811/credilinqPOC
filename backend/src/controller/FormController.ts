import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { FormDef } from "../entity/FormDef"

export class FormController {

    private formRepository = AppDataSource.getRepository(FormDef)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.formRepository.find()
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { companyUEN, companyName, fullName, positionHeld, email, mobileNumber } = request.body;

        const formData = Object.assign(new FormDef(), {
            companyUEN,
            companyName,
            fullName,
            positionHeld,
            email,
            mobileNumber
        })

        return this.formRepository.save(formData)
    }

}