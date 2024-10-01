let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflex"];
companies.shift();
companies.splice(2, 1, "Ola");
companies.push("Amazon");
console.log(companies);
