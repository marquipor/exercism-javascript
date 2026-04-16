export const hey = (message) => {
  message = message.trim() // Eliminar String con varios espacios seguidos
    if (message === message.toUpperCase() && message !== message.toLowerCase()){
      if(message.endsWith('?')){
        return "Calm down, I know what I'm doing!";
      } else{
        return "Whoa, chill out!";
    }} else if(message.endsWith('?')){
      return 'Sure.';
    } else if(message === ""){
        return "Fine. Be that way!"
    } else {
      return "Whatever.";
    }
};
