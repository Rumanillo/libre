let dis = 0
DFRobotMaqueenPlus.I2CInit()
DFRobotMaqueenPlus.PID(PID.OFF)
let giro = Math.randomBoolean()
basic.forever(function () {
    dis = DFRobotMaqueenPlus.ultraSonic(PIN.P8, PIN.P12)
    if (dis != 0 && dis < 20) {
        giro = Math.randomBoolean()
        if (giro == true) {
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 100)
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 0)
            basic.pause(700)
            DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.YELLOW)
            basic.pause(700)
        } else {
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 0)
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 100)
            basic.pause(700)
            DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.YELLOW)
            basic.pause(700)
        }
    } else {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 75)
    }
    if (input.lightLevel() < 20) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.WHITH)
    }
    if (input.lightLevel() > 20) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
    }
    if (input.soundLevel() > 50) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.BLUE)
        basic.pause(100)
    }
})
