//
// This is only a SKELETON file for the 'Pig Latin' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class translator {
  static translate(sentence) {
    var result = "";
            var sent = sentence.split(" ");
            for (const sente of sent) {
            var beginning = sente.charAt(0);
                if (beginning == 'a'
                        || beginning == 'e'
                        || beginning == 'i'
                        || beginning == 'o'
                        || beginning == 'u'
                        || (beginning == 'x' && sente.charAt(1) == 'r')
                        || (beginning == 'y' && sente.charAt(1) == 't')) {
                    result += sente + "ay";
                } else {
                    if ((sente.charAt(0) == 'r' && sente.charAt(1) == 'h' && (sente.charAt(2) == 'y' && sente.charAt(3) == 't'))) {
                        result += sente.substring(2, sente.length) + sente.substring(0, 2) + "ay";
                    }
                    else if ((sente.charAt(0) == 'c' && sente.charAt(1) == 'h')
                            || (sente.charAt(0) == 'q' && sente.charAt(1) == 'u')
                            || (sente.charAt(0) == 't' && sente.charAt(1) == 'h')) {
                        if (sente.charAt(0) == 't' && sente.charAt(1) == 'h' && sente.charAt(2) == 'r') {
                            result += sente.substring(3, sente.length) + sente.substring(0, 3) + "ay";
                        } else if (sente.charAt(2) == 'q' && sente.charAt(3) == 'u') {
                            result += sente.substring(4, sente.length) + sente.substring(0, 4) + "ay";
                        } else {
                            result += sente.substring(2, sente.length) + sente.charAt(0) + sente.charAt(1) + "ay";
                        }
                    } else if (sente.charAt(0) == 's' && sente.charAt(1) == 'c' && sente.charAt(2) == 'h') {
                        result += sente.substring(3, sente.length) + sente.substring(0, 3) + "ay";
                    } else {
                        if (sente.charAt(1) == 'q' && sente.charAt(2) == 'u') {
                            result += sente.substring(3, sente.length) + sente.substring(0, 3) + "ay";
                        } else {
                            result += sente.substring(1, sente.length) + sente.charAt(0) + "ay";
                        }
                    }
                }
                result += " ";
            }
            return result.substring(0, result.length - 1);
  }
}
