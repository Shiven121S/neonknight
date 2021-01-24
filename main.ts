namespace SpriteKind {
    export const Player1 = SpriteKind.create()
    export const Player2 = SpriteKind.create()
}
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (GameStarted) {
        if (player1.isHittingTile(CollisionDirection.Bottom)) {
            if (player1.vy == 0) {
                player1.vy = -200
            }
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (GameStarted) {
        timer.background(function () {
            music.playTone(131, music.beat(BeatFraction.Half))
        })
        timer.background(function () {
            scene.cameraShake(4, 200)
        })
        timer.background(function () {
            if (Direction == "r") {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . 5 5 . . . . . . 
                    . . . . . . . . 5 5 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, player1, 100, 0)
            } else if (Direction == "l") {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . 5 5 . . . . . . 
                    . . . . . . . . 5 5 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, player1, -100, 0)
            }
        })
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (GameStarted) {
        Direction = "l"
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (GameStarted) {
        Direction = "r"
    }
})
function Setup () {
    player1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 f f f f f f f f 5 . . . 
        . . . 5 f f f f f f f f 5 . . . 
        . . . 5 f f f f f f f f 5 . . . 
        . . . 5 f f f f 5 5 5 5 5 5 5 . 
        . . . 5 f f f f 5 f f f f f 5 . 
        . . . 5 f f f f 5 f 5 5 5 5 5 . 
        . . . 5 f f f f 5 5 5 f 5 . . . 
        . . . 5 f f f f f f f f 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        `, SpriteKind.Player1)
    tiles.placeOnRandomTile(player1, assets.tile`transparency16`)
    scene.cameraFollowSprite(player1)
    player1.ay = 275
    Ammo = 20
    controller.player1.moveSprite(player1, 90, 0)
    textSprite.destroy()
}
blockMenu.onMenuOptionSelected(function (option, index) {
    if (option == "PLAY") {
        color.startFade(color.originalPalette, color.White, 500)
        timer.after(800, function () {
            blockMenu.setControlsEnabled(false)
            blockMenu.closeMenu()
            Direction = "r"
            color.startFade(color.White, color.originalPalette, 500)
            tiles.setTilemap(tilemap`level4`)
            Setup()
            timer.after(500, function () {
                GameStarted = false
            })
        })
    } else if (option == "CONTROLS") {
        game.showLongText("A/D or LEFT and RIGHT ARROW KEYS to move left and right. SPACE or Z to shoot.", DialogLayout.Full)
    } else if (option == "INSTRUCTIONS") {
        game.showLongText("In this game, LESS projectiles IS MORE speed and jump height. Every few seconds, enemies and reward crates will drop. Collecting these crates will give you more health, one of five projectile launchers, or more ammunition. If the player comes within a certain range of an enemy, the enemy will follow the player until the enemy is destroyed, shot, or the player escapes its range.", DialogLayout.Full)
    }
})
let Ammo = 0
let projectile: Sprite = null
let Direction = ""
let player1: Sprite = null
let textSprite: TextSprite = null
let GameStarted = false
GameStarted = false
blockMenu.showMenu(["PLAY", "CONTROLS", "INSTRUCTIONS"], MenuStyle.List, MenuLocation.BottomHalf)
blockMenu.setColors(9, 15)
textSprite = textsprite.create("NeonKnight", 0, 9)
textSprite.setMaxFontHeight(10)
textSprite.setPosition(70, 19)
game.onUpdate(function () {
    if (GameStarted) {
        let GameMode = ""
        if (GameMode == "s") {
            controller.player1.moveSprite(player1, 90 - Ammo * 2, 0)
        }
    }
})
