// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`0a000900020202020203020202020201010102010201020202010201020102010202020102020201020102020201010101010101020202020202020202010202020202020202020102020201010101010101020202020202020202020202`, img`
2 2 2 2 2 . 2 2 2 2 
2 . . . 2 . 2 . 2 2 
2 . 2 . 2 . 2 . 2 2 
2 . 2 2 2 . 2 . 2 2 
2 . . . . . . . 2 2 
2 2 2 2 2 2 2 . 2 2 
2 2 2 2 2 2 2 . 2 2 
2 . . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorLight0,sprites.dungeon.doorOpenNorth], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a000900020302020202020202020201010101010101010202010202020202020102020101020101010101020201020202020202010202010102010101010102020102020102020202020201010501010101010202020202020402020202`, img`
2 . 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . 2 2 2 2 2 2 . 2 
2 . . 2 . . . . . 2 
2 . 2 2 2 2 2 2 . 2 
2 . . 2 . . . . . 2 
2 . 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 2 2 2 2 . 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorLight0,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.floorLight1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
