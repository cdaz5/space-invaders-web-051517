class CrewMember {
  constructor(position) {
    this.position = position
    this.currentShip = "Looking for a Rig"
  }

  setsInvisibility() {
    if (this.position === "Defender" && this.currentShip !== "Looking for a Rig") {
      this.currentShip.cloaked = true
    } else {
      return "had no effect"
    }
  }

  chargePhasers() {
    if (this.position === 'Gunner' && this.currentShip !== "Looking for a Rig") {
      this.currentShip.phasersCharge = 'charged!'
    } else {
        return "had no effect"
      }
  }

  engageWarpDrive() {
    if (this.position === 'Pilot' && this.currentShip !== "Looking for a Rig") {
      this.currentShip.warpDrive = 'engaged!'
    } else {
      return "had no effect"
    }
  }
}


class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.docked = true
    this.phasersCharge = 'uncharged'
    this.assignCrew()
  }

  assignCrew() {
    if (this.crew.length > 0) {
      this.docked = false;
      this.crew.forEach((crew) => {
        crew.currentShip = this
      })
    } else {
      this.docked = true
    }
  }



}
