export default defineEventHandler((event) => {
  const random_value = pop_random(current_card_values);
  if (!random_value?.value) {
    return null;
  } else if (!random_value.rest_arr) {
    current_card_values = card_values;
  } else {
    current_card_values = random_value.rest_arr;
  }
  return random_value.value;
});

const pop_random = (
  arr: string[],
): { value: string; random_index: number; rest_arr: string[] } | undefined => {
  if (arr.length === 0) {
    return undefined;
  }
  const random_index = Math.floor(Math.random() * arr.length);
  const out = arr[random_index];
  arr = arr.slice(0, random_index).concat(arr.slice(random_index + 1));
  return { value: out, random_index, rest_arr: arr };
};

const card_values: string[] = [
  'Der jüngste Spieler trinkt',
  'Der Spieler mit dem längsten Bart trinkt',
  'Alle, die eine Brille tragen, trinken',
  'Die Person, die zuletzt auf Toilette war, trinkt',
  'Alle, die schwarze Kleidung tragen, trinken',
  'Trinke, wenn du einen Spitznamen hast',
  'Alle, die heute schon gelogen haben, trinken',
  'Der Spieler mit den meisten Geschwistern trinkt',
  'Alle, die ein Haustier haben, trinken',
  'Trinke, wenn du in den letzten 7 Tagen Alkohol getrunken hast',
  'Der Spieler, der am weitesten von hier entfernt geboren wurde, trinkt',
  'Der Spieler mit der kürzesten Frisur trinkt',
  'Alle, die heute schon Sport getrieben haben, trinken',
  'Der Spieler, der als letztes Geburtstag hatte, trinkt',
  'Alle, die in den letzten 24 Stunden telefoniert haben, trinken',
  'Der Spieler, der am längsten in diesem Raum ist, trinkt',
  'Alle, die in den letzten 7 Tagen mehr als 50 Euro ausgegeben haben, trinken',
  'Der Spieler, der am längsten in der Sonne war, trinkt',
  'Alle, die jemals auf einem Festival gezeltet haben, trinken',
  'Der Spieler, der am längsten wach war, trinkt',
  'Der Spieler, der am meisten Länder besucht hat, trinkt',
  'Der Spieler, der am meisten Sportarten ausübt, trinkt',
  'Der Spieler, der am meisten Sprachen spricht, trinkt',
  'Alle trinken, die in den letzten 24 Stunden Kaffee getrunken haben',
  'Alle, die einen Hut tragen, trinken',
  'Der Spieler mit dem höchsten Studienabschluss trinkt',
  'Alle, die Geschwister haben, trinken',
  // intim version
  'Alle, die heute schon sexuell aktiv waren, trinken',
  'Der Spieler, der am meisten Sexpartner hatte, trinkt',
  'Alle, die einen Kink haben, trinken',
  'Alle, die schonmal mit jemanden aus der Runde Sex hatten, müssen trinken',

  'Deine Nachbarn müssen trinken',
  'Dein Nachfolger muss trinken',
  'Wähle eine Person, diese darf zwei Personen wählen, die trinken müssen',
  'Du musst trinken',
  'Dies ist ein Anti-Joker. Wenn du das nächste Mal nicht trinken musst, musst du stattdessen zwei Mal trinken',
  'Dies ist ein Joker. Wenn du das nächste Mal nicht trinken musst, musst du stattdessen nichts trinken',
  'Dein bester Freund in der Runde muss trinken',
  'Wer deinen Zweitnamen als erstes errät, darf jemanden bestimmen, der trinken muss',
  'Wen du zuletzt in der Runde umarmt hast, muss trinken',
  'Wer Gastgeber spielt, muss trinken',
  'Wähle die Person mit dem höchsten Alkoholpegel. Diese Person muss trinken',
  'Wähle die Person, die dir den nächsten Drink mischen darfst. Das ist Bestrafung genug, du musst nicht trinken',
  //intim version
  'Wen du zuletzt in der Runde geküsst hast, muss trinken. Fall niemanden, musst du trinken',
  'Wenn du die Unterwäschenfarbe deines Gegenüber errätst, muss er trinken, sonst du',
  'Wähle die attraktivste Person in der Runde. Diese Person muss trinken',
  'Wähle die Person, mit der du am ehesten schlafen würdest. Diese Person muss trinken',

  'Du darfst bis du das nächste Mal ziehst nicht mehr mit jemandem Blickkontakt aufnehmen, sonst musst du trinken',
  'Du darfst bis du das nächste Mal ziehst nicht mehr mit jemandem sprechen, sonst musst du trinken',
  'Du darfst bis du das nächste Mal ziehst nicht mehr eine Zahl sagen, sonst musst du trinken',
  'Du darfst bis du das nächste Mal ziehst nicht mehr einen Namen aus der Runde sagen, sonst musst du trinken',
  'Du darfst bis du das nächste Mal ziehst nicht mehr den Tisch berühren, sonst musst du trinken',
  'Du darfst bis du das nächste Mal ziehst nicht mehr lachen, sonst musst du trinken',
  'Du darfst bis du das nächste Mal ziehst nicht mehr auf dein Handy schauen, sonst musst du trinken',
  'Du darfst bis du das nächste Mal ziehst nicht mehr blinzeln, sonst musst du trinken',
  'Du darfst bis du das nächste Mal ziehst nicht mehr den Boden berühren, sonst musst du trinken',
  //intim version
  'Du musst bis zum nächsten Zug mit französischem Akzent reden, scheiterst du, musst du trinken',
  'Du musst bis zum nächsten Zug auf dem Schoss deines linken Nachbars sitzen, hältst du es nicht aus, musst du trinken',
  'Du darfst ein Kleidungsstück loswerden oder trinken',
  'Du darfst deinem rechten Nachbar eine Fußmassage geben oder trinken',

  'Diskutiert, wer am meisten Geld für unnötige Dinge ausgegeben hat. Diese Person muss trinken',
  'Diskutiert, wer am meisten Geld schuldet. Diese Person muss trinken',
  'Diskutiert, wer der beste Schauspieler aller Zeiten ist. Diese Person muss trinken',
  'Diskutiert, wer die lustigste Person in der Runde ist. Diese Person muss trinken',
  'Diskutiert, wer die kreativsten Ideen hat. Diese Person muss trinken',
  'Diskutiert, wer die beste Playlist erstellen kann. Diese Person muss trinken',
  'Diskutiert, wer die beste Allgemeinbildung hat. Diese Person muss trinken',
  'Diskutiert, wer die beeindruckendsten Survival-Skills hat. Diese Person muss trinken',
  //intim version
  'Diskutiert, wer eine Woche lang am ehesten ohne Duschen/Waschen auskommt, die Person muss trinken',
  'Diskutiert, wer am längsten ohne Masturbieren auskommt, die Person muss trinken',
  'Diskutiert, wer am ehesten einen Dreier haben wird, die Person muss trinken',
  'Diskutiert, wer am ehesten einen One-Night-Stand haben wird, die Person muss trinken',
  'Diskutiert, wer die größten Brüste hat, die Person muss trinken',
  'Diskutiert, wer den größten Penis hat, die Person muss trinken',
  'Diskutiert, wer am ehesten eine Affäre anfangen würde, die Person muss trinken',
];
let current_card_values: string[] = card_values;
