let company = {
    name: `Gabriel's Company`,
    yearly_revenue: 10000000,
    ceo: `Gabriel`,
    number_of_employees: 87,
    managers: [ {
        name: `Alex`,
        salary: 6000,
        is_senior: true
    }, 
    {
        name: `James`,
        salary: 4000,
        is_senior: true
    },
    {
        name: `Hani`,
        salary: 8000,
        is_senior: false
    }]
}

if (company[`yearly_revenue`] >= 1000000) {
    console.log(`Congratulations, ${company[`name`]}! ${company[`ceo`]}, have ran this business so good! They have managed a total of ${company[`number_of_employees`]} employees.`)
} else {
    console.log("Work more!")
}

let counter_manager = 0;
while(counter_manager < company[`managers`].length) {
    console.log(company[`managers`][counter_manager]);
    counter_manager ++;
}

for(let counter_manager = 0; counter_manager < company[`managers`].length; counter_manager++) {
    console.log(company[`managers`][counter_manager]);
}

for(let counter_manager = 0; counter_manager < company[`managers`].length; counter_manager++) {
    console.log(`Name of the manager: ${company[`managers`][counter_manager][`name`]}. Salary: ${company[`managers`][counter_manager][`salary`]}.`);
    if (company[`managers`][counter_manager][`is_senior`] === true) {
        console.log("Welcome!")
    }
}