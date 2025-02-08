import validator from 'validator'; 

export class UpdateRepairDTO {
    constructor(
        public readonly date: Date,
        public readonly userId: string,
    ) {}

  
    static create(object: { [key: string]: any }): [string?, UpdateRepairDTO?] {
        const { date, userId } = object;

        
        if (!date) return ['La fecha no existe', undefined];
        if (!(date instanceof Date)) return ['La fecha debe ser un objeto Date', undefined];

        
        if (!userId) return ['El userId no existe', undefined];
        if (typeof userId !== 'string') return ['El userId debe ser un string', undefined];
        if (!validator.isUUID(userId)) return ['El userId no tiene un formato válido', undefined];

       
        return [undefined, new UpdateRepairDTO(date, userId)];
    }
}