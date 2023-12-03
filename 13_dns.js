const dns = require('dns');

// Function 1: Resolving a domain name to an IP address
dns.resolve4('www.example.com', (err, addresses) => {
  if (err) {
    console.error('1. Error resolving domain:', err);
    return;
  }

  console.log('1. Resolved IP addresses:', addresses);
});

// Function 2: Performing reverse DNS lookup
dns.reverse('8.8.8.8', (err, hostnames) => {
  if (err) {
    console.error('2. Error performing reverse DNS lookup:', err);
    return;
  }

  console.log('2. Hostnames for IP address:', hostnames);
});

// Function 3: Resolving MX records for a domain
dns.resolveMx('example.com', (err, records) => {
  if (err) {
    console.error('3. Error resolving MX records:', err);
    return;
  }

  console.log('3. Resolved MX records:', records);
});
