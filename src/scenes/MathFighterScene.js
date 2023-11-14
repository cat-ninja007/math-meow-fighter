import Phaser from "phaser";
export default class MathFighterScene extends Phaser.Scene {
    constructor() {
        super('math-fighter-scene')
    }

    // METHOD INIT
    init() {
        this.gameHalfWidth = this.scale.width * 0.5
        this.gameHalfHeight = this.scale.height * 0.5
        this.player = undefined
        this.enemy = undefined
        this.slash = undefined
    }

    // METHOD PRELOAD
    preload() {
        // Load All Images
        this.load.image('background', 'images/bg_layer1.png')
        this.load.image('fight-bg', 'images/fight_bg.png')
        this.load.image('tile', 'images/tile.png')
        this.load.image('start-btn', 'images/start_button.png')


        // Load All Sprites
        this.load.spritesheet('player', 'images/warrior1.png', {
            frameWidth: 80,
            frameHeight: 80
        })

        this.load.spritesheet('enemy', 'images/warrior2.png', {
            frameWidth: 80,
            frameHeight: 80
        })

        this.load.spritesheet('numbers', 'images/numbers.png', {
            frameWidth: 131,
            frameHeight: 71.25
        })

        this.load.spritesheet('slash', 'images/slash.png', {
            frameWidth: 42,
            frameHeight: 88
        })

    }

    // METHOD CREATE
    create() {
        // Create A Blue Background
        this.add.image(240, 320, 'background')
        const fight_bg = this.add.image(240, 160, 'fight-bg')

        // Create Tile
        const tile = this.physics.add.staticImage(240, fight_bg.height - 40, 'tile')

        // Create Player
        this.player = this.physics.add.sprite(
            this.gameHalfWidth - 150,
            this.gameHalfHeight - 200, 'player')
            .setBounce(0.2)
            .setOffset(-20, -10)

        // A Code to enable the PLAYER to stand on the tile
        this.physics.add.collider(this.player, tile)

        // Create Enemy
        this.enemy = this.physics.add.sprite(
            this.gameHalfWidth + 150,
            this.gameHalfHeight - 200, 'enemy')
            .setBounce(0.2)
            .setOffset(20, -10)
            .setFlipX(true)

        // A Code to enable the ENEMY to stand on the tile
        this.physics.add.collider(this.enemy, tile)


        // Create Slash
        this.slash = this.physics.add.sprite(240, 60, 'slash')
            .setActive(false)
            .setVisible(false)
            .setGravityY(-500) // To be visible
            .setOffset(0, -10) // To against gravity, so that you stay on top
            .setDepth(1)
            .setCollideWorldBounds(true)

        // Call createAnimation() Method
        this.createAnimation()

    }

    // METHOD UPDATE
    update() {

    }


    // METHOD CREATE ANIMATION
    createAnimation() {
        // Player Animation
        this.anims.create({
            key: 'player-standby',
            frames: this.anims.generateFrameNumbers('player',
                { start: 15, end: 19 }),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'player-attack',
            frames: this.anims.generateFrameNumbers('player',
                { start: 10, end: 14 }),
            frameRate: 10
        })

        this.anims.create({
            key: 'player-hit',
            frames: this.anims.generateFrameNumbers('player',
                { start: 5, end: 9 }),
            frameRate: 10
        })

        this.anims.create({
            key: 'player-die',
            frames: this.anims.generateFrameNumbers('player',
                { start: 0, end: 4 }),
            frameRate: 10
        })

        // ====================================
        // Enemy Animation
        this.anims.create({
            key: 'enemy-standby',
            frames: this.anims.generateFrameNumbers('enemy',
                { start: 15, end: 19 }),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'enemy-attack',
            frames: this.anims.generateFrameNumbers('enemy',
                { start: 10, end: 14 }),
            frameRate: 10
        })

        this.anims.create({
            key: 'enemy-hit',
            frames: this.anims.generateFrameNumbers('enemy',
                { start: 5, end: 9 }),
            frameRate: 10
        })

        this.anims.create({
            key: 'enemy-die',
            frames: this.anims.generateFrameNumbers('enemy',
                { start: 0, end: 4 }),
            frameRate: 10
        })
    }

}