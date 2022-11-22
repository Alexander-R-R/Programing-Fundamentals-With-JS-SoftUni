function validEmails(text) {
  let pattern =
    /(?<!\S)[A-Za-z]+([\.\-\_]*[A-Za-z]+)*@[A-Za-z]+([\.\-]*[A-Za-z]+)*([\.\-]*[A-Za-z]+)*(\.[A-Za-z]+)/g;
  let result = text.match(pattern);

  for (let line of result) {
    console.log(line);
  }
}

validEmails(
  "Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information"
);
