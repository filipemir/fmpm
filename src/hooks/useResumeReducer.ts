import { useReducer } from 'react';

import { RESUME } from 'data/resume';
import {
    CareerPhase,
    Degree,
    ResumeItem,
    ResumeSection,
    Tenure
} from 'models/experience';
import { ResumeItemsCache } from 'utils/cache';
import { isCareerPhase, isTenure } from 'utils/experience';

const cache = ResumeItemsCache.init(),
    mostRecentJob = RESUME[ResumeSection.EXPERIENCE][0].tenures[0].jobs[0];

interface ResumeState {
    item: ResumeItem;
    section: ResumeSection;
    phase?: CareerPhase;
    tenure?: Tenure;
}

export enum ResumeActionType {
    SET_ITEM,
    SET_SECTION,
    SET_PHASE,
    SET_TENURE
}

type ResumeAction =
    | { type: ResumeActionType.SET_ITEM; payload: ResumeItem }
    | { type: ResumeActionType.SET_SECTION; payload: ResumeSection }
    | { type: ResumeActionType.SET_PHASE; payload: CareerPhase }
    | { type: ResumeActionType.SET_TENURE; payload: Tenure };

function reduceSetItem(item: ResumeItem) {
    const { section, phase, tenure } = cache.get(item);
    return { item, section, phase, tenure };
}

function reduceSetSection(section: ResumeSection) {
    const first: CareerPhase | Tenure | Degree = RESUME[section][0];

    if (isCareerPhase(first)) {
        const tenure = first.tenures[0] as Tenure,
            item = tenure.jobs[0];

        return { phase: first, section, tenure, item };
    }

    return { section, item: isTenure(first) ? first.jobs[0] : first };
}

function reduceSetPhase(phase: CareerPhase) {
    const item = phase.tenures[0].jobs[0],
        { section, tenure } = cache.get(item);
    return { item, section, phase, tenure };
}

function reduceSetTenure(tenure: Tenure) {
    const item = tenure.jobs[0],
        { section, phase } = cache.get(item);
    return { item, section, phase, tenure };
}

function resumeReducer(state: ResumeState, action: ResumeAction): ResumeState {
    switch (action.type) {
        case ResumeActionType.SET_ITEM:
            return reduceSetItem(action.payload);
        case ResumeActionType.SET_SECTION:
            return reduceSetSection(action.payload);
        case ResumeActionType.SET_PHASE:
            return reduceSetPhase(action.payload);
        case ResumeActionType.SET_TENURE:
            return reduceSetTenure(action.payload);
    }
}

export default function useResumeReducer() {
    const { section, phase, tenure } = cache.get(mostRecentJob),
        initialState: ResumeState = {
            item: mostRecentJob,
            section,
            phase,
            tenure
        },
        [state, dispatch] = useReducer(resumeReducer, initialState),
        actions = {
            setItem: (item: ResumeItem) =>
                dispatch({ type: ResumeActionType.SET_ITEM, payload: item }),
            setSection: (section: ResumeSection) =>
                dispatch({
                    type: ResumeActionType.SET_SECTION,
                    payload: section
                }),
            setPhase: (phase: CareerPhase) =>
                dispatch({ type: ResumeActionType.SET_PHASE, payload: phase }),
            setTenure: (tenure: Tenure) =>
                dispatch({ type: ResumeActionType.SET_TENURE, payload: tenure })
        };

    return { state, actions };
}
