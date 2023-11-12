import prompts from '~~/prompts';

export default defineEventHandler(() => {
  const prompt = pop_random(current_prompts);
  if (prompt === undefined) {
    return null;
  } else if (!prompt.rest.length) {
    current_prompts = prompts;
  } else {
    current_prompts = prompt.rest;
  }
  return prompt.value;
});

const pop_random = (
  arr: string[],
): { value: string; index: number; rest: string[] } | undefined => {
  if (arr.length === 0) {
    return undefined;
  }
  const random_index = Math.floor(Math.random() * arr.length);
  const out = arr[random_index];
  arr = arr.slice(0, random_index).concat(arr.slice(random_index + 1));
  return { value: out, index: random_index, rest: arr };
};

let current_prompts: string[] = prompts;
