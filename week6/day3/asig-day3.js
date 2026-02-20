function createNotifier(appName) {
  return function setTemplate(template) {
    return function send(userName) {
      const message = template.replace("{user}", userName);
      console.log(`${appName}: ${message}`);
    };
  };
}

// Example usage 1:
const notifier = createNotifier("TaskMaster");
const urgentTemplate = notifier("Reminder: {user}, your task is due!");

urgentTemplate("Gabriella");

// Another example 2
const casualTemplate = notifier("Hello {user}, you have a new message!");
casualTemplate("Alex");

// another usage 3
const smartTemplate = notifier(
  "hello {user}, your payment is successfull, thank you for banking with us!",
);
smartTemplate("Fahma");

const addTemplate = notifier(
  "hello {user}, your payment is successfull, thank you for banking with us!",
);
addTemplate("Rhoda");
