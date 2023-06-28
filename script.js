const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const sun = { x: canvas.width / 2, y: canvas.height / 2, r: 50, color: "yellow" };

    const planets = [
      {
        name: "Mercury",
        distance: 100,
        radius: 5,
        speed: 0.001,
        color: "#8B4513",
        moons: [

        ]
      },
      {
        name: "Venus",
        distance: 200,
        radius: 10,
        speed: 0.0008,
        color: "#FFA500",
        moons: [

        ]
      },
      {
        name: "Earth",
        distance: 300,
        radius: 12,
        speed: 0.0005,
        color: "#1E90FF",
        moons: [
          { name: "Moon", distance: 20, radius: 2, speed: 0.0007, color: "#C0C0C0" }
        ]
      },
      {
        name: "Mars",
        distance: 400,
        radius: 8,
        speed: 0.0003,
        color: "#FF4500",
        moons: [
        {
  name: "Phobos",
  distance: 15,
  radius: 2,
  speed: 0.001,
  color: "#D3D3D3"
},
{
  name: "Deimos",
  distance: 25,
  radius: 2,
  speed: 0.0005,
  color: "#D3D3D3"
}
        ]
      },
      {
        name: "Jupiter",
        distance: 500,
        radius: 20,
        speed: 0.0002,
        color: "#FF6347",
        moons: [
        {
  name: "Io",
  distance: 20,
  radius: 3,
  speed: 0.0005,
  color: "#D3D3D3"
},
{
  name: "Europa",
  distance: 30,
  radius: 3,
  speed: 0.0003,
  color: "#D3D3D3"
},
{
  name: "Ganymede",
  distance: 40,
  radius: 4,
  speed: 0.0002,
  color: "#D3D3D3"
},
{
  name: "Callisto",
  distance: 50,
  radius: 4,
  speed: 0.0001,
  color: "#D3D3D3"
}

        ]
      },
      {
    name: "Saturn",
    distance: 450,
    radius: 16,
    speed: 0.0001,
    color: "#F0E68C",
    moons: [
    {
  name: "Mimas",
  distance: 20,
  radius: 2,
  speed: 0.0005,
  color: "#D3D3D3"
},
{
  name: "Enceladus",
  distance: 30,
  radius: 3,
  speed: 0.0003,
  color: "#D3D3D3"
},
{
  name: "Tethys",
  distance: 40,
  radius: 3,
  speed: 0.0002,
  color: "#D3D3D3"
},
{
  name: "Dione",
  distance: 50,
  radius: 4,
  speed: 0.0001,
  color: "#D3D3D3"
}

]
},
{
name: "Uranus",
distance: 550,
radius: 14,
speed: 0.00007,
color: "#ADD8E6",
moons: [
{
  name: "Miranda",
  distance: 20,
  radius: 2,
  speed: 0.0005,
  color: "#D3D3D3"
},
{
  name: "Ariel",
  distance: 30,
  radius: 3,
  speed: 0.0003,
  color: "#D3D3D3"
},
{
  name: "Umbriel",
  distance: 40,
  radius: 3,
  speed: 0.0002,
  color: "#D3D3D3"
},
{
  name: "Titania",
  distance: 50,
  radius: 4,
  speed: 0.0001,
  color: "#D3D3D3"
}

]
},
{
name: "Neptune",
distance: 650,
radius: 12,
speed: 0.00005,
color: "#00BFFF",
moons: [
{
  name: "Triton",
  distance: 20,
  radius: 2,
  speed: 0.0005,
  color: "#D3D3D3"
},
{
  name: "Proteus",
  distance: 30,
  radius: 3,
  speed: 0.0003,
  color: "#D3D3D3"
},
{
  name: "Nereid",
  distance: 40,
  radius: 3,
  speed: 0.0002,
  color: "#D3D3D3"
},
{
  name: "Larissa",
  distance: 50,
  radius: 4,
  speed: 0.0001,
  color: "#D3D3D3"
}

]
}];

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw sun
  ctx.beginPath();
  ctx.arc(sun.x, sun.y, sun.r, 0, 2 * Math.PI);
  ctx.fillStyle = sun.color;
  ctx.fill();
  ctx.fillStyle = "white";
  ctx.font = "12px Arial";
  ctx.textAlign="center";
  ctx.fillText('sun',sun.x ,sun.y + sun.r + 15)

  // Draw planets and moons
  planets.forEach(planet => {
    const angle = planet.speed * Date.now();
    const planetX = sun.x + planet.distance * Math.cos(angle);
    const planetY = sun.y + planet.distance * Math.sin(angle);

    // Draw planet orbit
    ctx.beginPath();
    ctx.arc(sun.x, sun.y, planet.distance, 0, 2 * Math.PI);
    ctx.strokeStyle = "grey";
    ctx.stroke();

    // Draw planet
    ctx.beginPath();
    ctx.arc(planetX, planetY, planet.radius, 0, 2 * Math.PI);
    ctx.fillStyle = planet.color;
    ctx.fill();

    // Draw planet label
    ctx.fillStyle = "white";
    ctx.font = "12px Arial";
    ctx.fillText(planet.name, planetX - planet.radius, planetY + planet.radius + 15);

    // Draw planet moons
    if (planet.moons) {
      planet.moons.forEach(moon => {
        const moonAngle = moon.speed * Date.now();
        const moonX = planetX + moon.distance * Math.cos(moonAngle);
        const moonY = planetY + moon.distance * Math.sin(moonAngle);

        // Draw moon orbit
        ctx.beginPath();
        ctx.arc(planetX, planetY, moon.distance, 0, 2 * Math.PI);
        ctx.strokeStyle = "grey";
        ctx.stroke();

        // Draw moon
        ctx.beginPath();
        ctx.arc(moonX, moonY, moon.radius, 0, 2 * Math.PI);
        ctx.fillStyle = moon.color;
        ctx.fill();

        // Draw moon label
        ctx.fillStyle = "white";
        ctx.font = "10px Arial";
        ctx.fillText(moon.name, moonX - moon.radius, moonY + moon.radius + 10);
      });
    }
  });

  requestAnimationFrame(draw);
}

draw();
