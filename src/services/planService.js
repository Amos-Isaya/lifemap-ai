import {mockProfile} from '../data/mockProfile.js';
import {mockResult} from '../data/mockResult.js';
import {validateProfile} from '../types/contracts.js';
import {mockConversation} from '../data/mockConversation.js';
export const intakeQuestions = mockConversation.questions;
const delay = () => new Promise(resolve=>setTimeout(resolve,350));
// AI integration: replace this adapter with messages -> AI -> { profile, reply, ... }.
// Demo uses a chosen fixture response. It never extracts financial data from natural text.
export async function sendIntakeMessage({profile,questionIndex,message}) {
 await delay();
 if(!message.trim()) throw new Error('Please add a message before sending.');
 const [field] = intakeQuestions[questionIndex];
 return {profile:{...profile,[field]:mockProfile[field]},reply:mockConversation.acknowledgement,source:'mock'};
}
// Backend integration: replace with POST LifeNeedsProfile -> LifeNeedsResult.
export async function calculatePlan(profile) {
 const missing = validateProfile(profile);
 if(missing.length) throw new Error(`Please review: ${missing.join(', ')}.`);
 await delay();
 return {result:structuredClone(mockResult),source:'mock'};
}
// AI explanation integration: verified LifeNeedsResult -> explanation; do not change numbers.
export async function explainPlan(result) {
 await delay();
 return `The illustrative ${new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(result.additionalCoverageNeeded)} result includes income support, outstanding debts, and education needs, with available resources shown separately. This fixed demo estimate does not change when you edit your information.`;
}
