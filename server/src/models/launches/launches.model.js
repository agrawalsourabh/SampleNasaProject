const launches = new Map();

const launch = {
    'flighNumber': 100,
    mission: 'Nasa',
    rocketType: 'Explorer IS1',
    exoplanet: 'Kepler-1652 b',
    launchDate: new Date('26 Dec, 2030'),
    customer: ['abc', 'def'],
    success: true,
    upcoming: true
};

launches.set(launch.flighNumber, launch);

module.exports = {
    launches
}