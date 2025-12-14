import { questions } from '../data/questions';

export const getShuffledQuestions = () => {
    // 1. Shuffle (Sort) the questions themselves
    const shuffledQs = [...questions].sort(() => Math.random() - 0.5);

    // 2. Shuffle the options within each question
    // We map to a new object to avoid mutating the original data
    return shuffledQs.map(q => ({
        ...q,
        options: [...q.options].sort(() => Math.random() - 0.5)
    }));
};

export const calculateResult = (answers) => {
    // answers: { questionId: 'Value' } e.g. { 'ie_1': 'I', 'sp_1': 'P' }

    const scores = {
        I: 0, E: 0,
        S: 0, P: 0,
        T: 0, B: 0,
        C: 0, X: 0
    };

    Object.keys(answers).forEach(qId => {
        const optionValue = answers[qId];
        if (scores[optionValue] !== undefined) {
            scores[optionValue]++;
        }
    });

    const type = [
        scores.I >= scores.E ? 'I' : 'E',
        scores.S >= scores.P ? 'S' : 'P',
        scores.T >= scores.B ? 'T' : 'B',
        scores.C >= scores.X ? 'C' : 'X'
    ].join('');

    return { type, scores };
};
