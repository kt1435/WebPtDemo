import rxjs, { Subject } from "rxjs"
import { iAttack } from "../interfaces/models"

export class EventBus {
    private static instance: EventBus;
    private constructor() {}
    
    static getInstance(): EventBus {
        if (!EventBus.instance) {
            EventBus.instance = new EventBus();
        }

        return EventBus.instance;
    }

    attackSubject = new Subject<iAttack>(); 
}