function correctRecipients(recipients) {
  const regex = /(^| +|\t+)(?!@)(\w+)/gm;
  return recipients.replace(regex, '$1@$2');
}

function recipientsList(recipients) {
  const regex = /(^| +|\t+)@(\w+)/gm;
  return recipients.replace(regex, '$1$2').split(' ');
}

function correctMessage(message, recipients, label) {
  return message.replace('{recipients}', recipients).replace('{label}', label)
}

module.exports = { correctRecipients, recipientsList, correctMessage };
