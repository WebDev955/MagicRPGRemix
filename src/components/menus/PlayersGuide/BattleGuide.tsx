//IMPORTS - STYLE
import style from "./BattleGuide.module.css"

const BattleGuide = () => {
    return (
        <div className={style.battlesWrapper}>
            <h1>Battles</h1>
            <p>
                There is a growing threat of darkness and monsters across the realm. As a novice mage, now is the time to learn how to battle.
            </p>

            <h2>Against Foes</h2>
            <p>Monsters and enemies all channel different elements.</p>
            <p>
                Their elements open up weaknesses you can crack, in addition to strengths against you. Unlike you, Mage, monsters don't
                change their element with a few exceptions.
            </p>

            <h2>The Novice Arcane User</h2>
            <p>As a novice mage, you naturally channel Arcane magic. You have no strengths and only a weakness to Mind.</p>
            <p>Little to no mana points are consumed to cast Arcane spells.</p>
            <p>Arcane casts are "free," as in always available to use with no reliance on Arcane Tablets to use.</p>

            <h2>Battle Strats</h2>
            <section className={style.battleStratsWrapper}>
                <div>
                    <h3>Cast</h3>
                    <div className={style.stratDetails}>
                        <p>You can bring up to 10 spells into a battle.</p>
                        <p>Upon using a spell tablet, you then channel that element and obtain that additional element.</p>
                        <p>Spells of that channeled element will be stronger.</p>
                        <p>You will now have the strengths and weaknesses of that element.</p>
                        <p>Upon using a different elemental spell, your channeled element will change.</p>
                        <p>(Maybe spell channeling only lasts a few turns before falling back to Arcane.)</p>
                    </div>
                </div>

                <div>
                    <h3>Barrier</h3>
                    <div className={style.stratDetails}>
                        <p>You can put up a protective shield to aid in a number of ways.</p>
                        <p>Reduce HP and/or MP loss</p>
                        <p>Deflect spells back to foes</p>
                        <p>Reduce incoming Debuffs</p>
                        <p>And much more</p>
                    </div>
                </div>

                <div>
                    <h3>Bag</h3>
                    <div className={style.stratDetails}>
                        <p>Swap in and out new Spells.</p>
                        <p>Use a healing potion. You can heal and attack in the same turn with a potion.</p>
                        <p>Should you use a healing spell (which heals), you can't attack again.</p>
                    </div>
                </div>

                <div>
                    <h3>Run</h3>
                    <div className={style.stratDetails}>
                        <p>Sometimes retreating is the best option...but that depends on the enemy.</p>
                        <p>Some enemies have a chance to trap you each time you try to run.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BattleGuide
