// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {

  const regex = /^Chatbot.*/i;
  return regex.test(command);
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  /*
  * la b asegura que la palabra empiece por 'emoji'
  * la w* se refiere a cualquier letra o numero que venga despues
  * g (global) -> todas las apariciones
  */
  const regex = new RegExp('\\bemoji\\w*','g');
  return  message.replace(regex, '');
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
  /*
  Hay que escapar los caracteres que significan algo en las regex: () y +
  \d es digito
  {*} numero de veces que se repite lo anterior
  */
const regex = /\(\+\d{2}\) \d{3}-\d{3}-\d{3}/;

  return (regex.test(number))? 
    "Thanks! You can now download me to your phone." :
    "Oops, it seems like I can't reach out to " + number;
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
  const regex = /\w+\.\w+/g;
  const result = userInput.match(regex)
  return result;
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
  /* El regex significa 0 o más espacios en blanco, una coma, 0 o más espacios en blanco */ 
  const regex = /\s*,\s*/;
  /* Separamos el nombre con el regex. Le ponemos orden Nombre + Apellido 
  y convertimos en array separando por un espacio */ 
  const formattedName =fullName.split(regex).reverse().join(" ");
  return `Nice to meet you, ${formattedName}`;
}
