if (!process.argv[2]) {
    console.log('run: npm test [wxToken,wxEnv]!')
    return
}

require(`./${process.argv[2]}.test`)
