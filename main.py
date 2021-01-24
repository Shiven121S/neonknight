@namespace
class SpriteKind:
    Player1 = SpriteKind.create()
    Player2 = SpriteKind.create()
def Make_Map(num: number):
    if GameStarted:
        pass

def on_menu_option_selected(option, index):
    if option == "Single_Player":
        color.start_fade(color.original_palette, color.white, 500)
        
        def on_after():
            global player1, GameMode, GameStarted
            blockMenu.set_controls_enabled(False)
            blockMenu.close_menu()
            player1 = sprites.create(img("""
                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . 9 9 9 9 9 9 9 9 . . . . 
                                    . . . . 9 f f f f f f 9 . . . . 
                                    . . . . 9 f f f f f f 9 . . . . 
                                    . . . . 9 f f f f 9 9 9 9 9 . . 
                                    . . . . 9 f f f f 9 f f f 9 . . 
                                    . . . . 9 f f f f 9 9 9 9 9 . . 
                                    . . . . 9 f f f f f f 9 . . . . 
                                    . . . . 9 9 9 9 9 9 9 9 . . . .
                """),
                SpriteKind.player)
            GameMode = "s"
            color.start_fade(color.white, color.original_palette, 500)
            GameStarted = True
        timer.after(800, on_after)
        
    elif option == "Multi_Player":
        color.start_fade(color.original_palette, color.white, 500)
        
        def on_after2():
            global player1, player2, GameMode, GameStarted
            blockMenu.set_controls_enabled(False)
            blockMenu.close_menu()
            player1 = sprites.create(img("""
                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . 9 9 9 9 9 9 9 9 . . . . 
                                    . . . . 9 f f f f f f 9 . . . . 
                                    . . . . 9 f f f f f f 9 . . . . 
                                    . . . . 9 f f f f 9 9 9 9 9 . . 
                                    . . . . 9 f f f f 9 f f f 9 . . 
                                    . . . . 9 f f f f 9 9 9 9 9 . . 
                                    . . . . 9 f f f f f f 9 . . . . 
                                    . . . . 9 9 9 9 9 9 9 9 . . . .
                """),
                SpriteKind.Player1)
            controller.player1.move_sprite(player1, 85, 0)
            player2 = sprites.create(img("""
                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . 2 2 2 2 2 2 2 2 . . . . 
                                    . . . . 2 f f f f f f 2 . . . . 
                                    . . . . 2 f f f f f f 2 . . . . 
                                    . . 2 2 2 2 2 f f f f 2 . . . . 
                                    . . 2 f f f 2 f f f f 2 . . . . 
                                    . . 2 2 2 2 2 f f f f 2 . . . . 
                                    . . . . 2 f f f f f f 2 . . . . 
                                    . . . . 2 2 2 2 2 2 2 2 . . . .
                """),
                SpriteKind.Player2)
            controller.player2.move_sprite(player2, 85, 0)
            GameMode = "m"
            color.start_fade(color.white, color.original_palette, 500)
            GameStarted = True
        timer.after(800, on_after2)
        
blockMenu.on_menu_option_selected(on_menu_option_selected)

player2: Sprite = None
GameMode = ""
player1: Sprite = None
GameStarted = False
GameStarted = False
blockMenu.show_menu(["Single_Player", "Multi_Player"],
    MenuStyle.LIST,
    MenuLocation.BOTTOM_HALF)
blockMenu.set_colors(9, 15)
textSprite = textsprite.create("NeonKnight", 0, 9)
textSprite.set_max_font_height(10)
textSprite.set_position(70, 19)