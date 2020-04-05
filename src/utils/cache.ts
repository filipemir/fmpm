import { CareerPhase, ResumeItem, ResumeSection, Tenure } from 'models/experience';
import hash from 'object-hash';
import { RESUME } from 'data/resume';

interface ResumeItemsCacheValue {
    section: ResumeSection;
    phase?: CareerPhase;
    tenure?: Tenure;
}

let _instance: ResumeItemsCache;

export class ResumeItemsCache {
    private cache: { [hash: string]: ResumeItemsCacheValue } = {};

    static init() {
        if (!_instance) {
            _instance = new ResumeItemsCache();
        }

        return _instance;
    }

    private constructor() {
        this.populate();
        return this;
    }

    public get(item: ResumeItem) {
        return this.cache[ResumeItemsCache.getKey(item)];
    }

    private static getKey(item: ResumeItem) {
        return hash(item);
    }

    private populate() {
        RESUME[ResumeSection.EXPERIENCE].forEach((phase) => {
            const { tenures } = phase;
            tenures.forEach((tenure) => {
                const { jobs } = tenure;
                jobs.forEach((job) => {
                    this.cache[ResumeItemsCache.getKey(job)] = {
                        section: ResumeSection.EXPERIENCE,
                        phase,
                        tenure
                    };
                });
            });
        });

        RESUME[ResumeSection.EDUCATION].forEach((degree) => {
            this.cache[ResumeItemsCache.getKey(degree)] = { section: ResumeSection.EDUCATION };
        });
    }
}
