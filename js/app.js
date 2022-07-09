let company = {
    name: `Gabriel's Company`,
    yearly_revenue: 10000000,
    ceo: `Gabriel`,
    number_of_employees: 87
}

if (company[`yearly_revenue`] >= 1000000) {
    console.log(`Congratulations, ${company[`name`]}! ${company[`ceo`]}, have ran this business so good! They have managed a total of ${company[`number_of_employees`]} employees.`)
} else {
    console.log("Work more!")
}