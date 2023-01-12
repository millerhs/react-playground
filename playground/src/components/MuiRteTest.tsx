import { Box, Button } from '@mui/material';
import { Editor } from '@tinymce/tinymce-react';
import React from 'react';
import { useRef } from 'react';

const MuiRteTest = () => {
  const [disabled, setDisabled] = React.useState(true);

  const editorRef = useRef<Editor | null>(null);

  const enableFullscreen = () => {
    if (editorRef.current?.editor) {
      editorRef.current?.editor?.execCommand('mceFullScreen');
    }
  };

  return (
    <Box sx={{ height: '80%' }}>
      {disabled && (
        <Button variant='contained' onClick={enableFullscreen}>
          Fullscreen
        </Button>
      )}
      <Editor
        ref={editorRef}
        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
        initialValue={html}
        disabled={disabled}
        init={{
          height: '100%',
          menubar: false,
          skin: 'oxide-dark',
          content_css: 'dark',
          branding: false,
          plugins: [
            'noneditable',
            'advlist',
            'autolink',
            'lists',
            'link',
            'image',
            'charmap',
            'anchor',
            'searchreplace',
            'visualblocks',
            'code',
            'fullscreen',
            'insertdatetime',
            'media',
            'table',
            'help',
            'wordcount',
          ],
          toolbar: disabled
            ? false
            : 'fullscreen | undo redo | blocks | ' +
              'bold italic forecolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help code',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
          fullscreen_native: disabled,
        }}
      />
    </Box>
  );
};

const html = `<p dir="ltr">TLDR Moonkin</p>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">Positive:</p>
<ul>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation">Starfall/Spread out AoE (almost no other class can do that)</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation">Versatile dmg profile (except Burst AoE)</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation">Good utility and movement, gained MotW&nbsp;</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation">Cool looking Moonkin Form + Flap + nice animation/class fantasy</p>
</li>
</ul>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">Negative:</p>
<ul>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation">Bad Burst AoE</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation">High Ramp up time</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation">CDs not as strong</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation">Solar beam position in talent tree</p>
</li>
</ul>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">Basic abilities:</p>
<ul>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation">Wrath&nbsp;</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation">Starfire</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation">Moonfire</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation">Sunfire</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation">Starsurge</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation">Starfall</p>
</li>
</ul>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">Your sunfire and your moonfire are rly important because they increase your damage onto the target (mastery), so keep them up at all times!</p>
<p dir="ltr">Your Wrath and Starfire are your &ldquo;Filler Spells&rdquo;, wrath does Nature dmg and is a single target spell and Starfire does arcane damage and does splash damage around its target.</p>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">Your resource is called Astral Power and you generate it with a variety of abilities and then you can spend it on either Starsurge or Starfall. Starsurge is a single target Astral power spender and Starfall is a huge AoE over time Astral damage spender.</p>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">Astral damage is the combination of Arcane and Nature damage, this means it will benefit from both nature dmg increases and also arcane damage increases. So if you have a +10% nature damage increase and a +10% arcane dmg increase, then your astral spells will do +20% more damage.</p>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">Your basic rotation revolves around &ldquo;Eclipse&rdquo;. You enter an eclipse by casting 2 wraths or 2 starfires. Wraths will trigger Lunar eclipse and Starfires will trigger Solar eclipse. Lunar eclipse increase your arcane dmg done for 15 seconds and Solar eclipse increase your nature damage done for 15 seconds.&nbsp;</p>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">&mdash;---</p>
<p><strong><br><br><br><br><br><br><br></strong></p>
<p dir="ltr">Single Target</p>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">Red: Important for DMG</p>
<p dir="ltr">Green: Not so important for dmg, can be changed (but best ST build currently)</p>
<p dir="ltr">Purple: Utility that is useful almost all the time. Non circled: optional utility</p>
<p dir="ltr"><img src="https://lh4.googleusercontent.com/0mKvpD24DmQLxBbufCIthwtE7EB2wwht-tVCnh39ti-d3d8K44tyVteyjJvCRjEzDdrRQsfhHMkokDB-RqsJvIofqpmOOpAI2W_LCGvAb7bYta_pfh-pCeRG7KEi4ef1N1Wx4fr4nsMn7cI9Gl1cfQrzTbVbcSH9y8Abf3oLUmYchI0SPsq9oN0WmspgJA" width="602" height="331"></p>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">Opener (without 4pc set bonus)</p>
<p dir="ltr">Wrath x2</p>
<p dir="ltr">Moonfire</p>
<p dir="ltr">Sunfire</p>
<p dir="ltr">Stellar Flare</p>
<p dir="ltr">Incarn (+pot +berserking +trinket)</p>
<p dir="ltr">Fury of Elune</p>
<p dir="ltr">normal rotation</p>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">Normal rotation:</p>
<p dir="ltr">Keep sunfire, moonfire and stellar flare up</p>
<p dir="ltr">Use Astral Power for Starsurge, inside eclipses (dont overcap)</p>
<p dir="ltr">Maximize eclipse uptime (enter Lunar on ST)</p>
<p dir="ltr">Cast Starfire if you dont have anything else to do inside Lunar</p>
<p dir="ltr">Cast Wrath if you dont have anything else to do during CDs (both eclipses)</p>
<p dir="ltr">Use Fury of Elune on CD</p>
<p dir="ltr">Use your Incarn on CD</p>
<p dir="ltr">Try to use your Starsurges at the start of an eclipse (to stack up starlord and to make use of the crit buff from Balance of All Thing) and dont use starsurges at the end of an eclipse</p>
<p dir="ltr">You can mostly ignore Rattle the Stars</p>
<p><strong><br><br><br><br><br></strong></p>
<p dir="ltr">AoE&nbsp;</p>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">Red: Important for DMG</p>
<p dir="ltr">Green: Not so important for dmg, can be changed (but best ST build currently)</p>
<p dir="ltr">Purple: Utility that is useful almost all the time. Non circled: optional utility</p>
<p dir="ltr">Orange: Pulsar or OS</p>
<p dir="ltr"><img src="https://lh4.googleusercontent.com/LADo8Le5PPPqdcmyTnbiqZPfR2_Wy5Vj76hgKtoFcZdsdTlqVoAc7WzlFYItnObgevAPQWv-2eKduABdL2oiuyCSVTnxgeb20fkI4QtLC8MLJheoC277hlnbopxlKcqBDIRnWwUiYbdooiGWJR9UzToRfpCBiNmAqLau_NgNXhAYc_5XTyZ86b-cgNS5Xg" width="602" height="356"></p>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">Opener on AoE:</p>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">Sunfire (if you can spread it to all target)</p>
<p dir="ltr">Moonfire otherwise until up on all targets</p>
<p dir="ltr">OS/Incarn</p>
<p dir="ltr">Dump AsP into Starfalls</p>
<p dir="ltr">Mushroom</p>
<p dir="ltr">Fury of Elune</p>
<p dir="ltr">Stellar Flare (if not up already)</p>
<p dir="ltr">Moonfire on any targets with low duration</p>
<p dir="ltr">Starfire if nothing else needs to be done</p>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">Normal AoE Rotation:</p>
<p dir="ltr">Keep up sunfire + moonfire</p>
<p dir="ltr">Use AsP for Starfall, dont overcap AsP</p>
<p dir="ltr">Enter Lunar Eclipse</p>
<p dir="ltr">Use Mushrooms to proc Waning</p>
<p dir="ltr">Use Fury of Elune on CD</p>
<p dir="ltr">Apply Stellar Flares if nothing else to do&nbsp;</p>
<p dir="ltr">Cast Starfire if nothing else to do</p>
<p><strong><br><br><br></strong></p>
<p dir="ltr">Gear</p>
<p dir="ltr">Any of this might change with tuning</p>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">Stats:</p>
<p dir="ltr">High ilvl = good (more intellect)</p>
<p dir="ltr">Mastery = good&nbsp;</p>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">Enchants:</p>
<p dir="ltr">Chest: <a href="https://www.wowhead.com/spell=389410/waking-stats">Waking Stats</a></p>
<p dir="ltr">Legs: <a href="https://www.wowhead.com/item=194011/frozen-spellthread">Intellect+Stamina</a></p>
<p dir="ltr">Rings: Mastery</p>
<p dir="ltr">Weapon: <a href="https://www.wowhead.com/spell=389550/sophic-devotion">Sophic Devotion</a></p>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">Avoidance on all &ldquo;utility&rdquo; enchants</p>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">Gems:</p>
<p dir="ltr"><a href="https://www.wowhead.com/item=192988/skillful-illimited-diamond">Primary Stat + Mastery (1)</a></p>
<p dir="ltr"><a href="https://www.wowhead.com/item=192961/keen-neltharite">Mastery+Haste</a></p>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">Trinkets: (sim it though)</p>
<p dir="ltr">Best by far <a href="https://www.wowhead.com/item=193677/furious-ragefeather?bonus=7974">Furious Ragefeather&nbsp;</a></p>
<p dir="ltr">Other useful trinkets:</p>
<p dir="ltr"><a href="https://www.wowhead.com/item=194301/whispering-incarnate-icon?bonus=7935&amp;class=11&amp;ilvl=421&amp;spec=102">Whispering Incarnate Icon</a> (also RLY strong for AoE)</p>
<p dir="ltr"><a href="https://www.wowhead.com/item=194309/spiteful-storm?bonus=7979&amp;class=11&amp;ilvl=424&amp;spec=102">Spiteful Storm</a></p>
<p dir="ltr"><a href="https://www.wowhead.com/item=194300/conjured-chillglobe?bonus=7935&amp;class=11&amp;ilvl=415&amp;spec=102">Conjured Chillglobe</a></p>
<p dir="ltr"><a href="https://www.wowhead.com/item=133641/eye-of-skovald?bonus=1795&amp;ilvl=415&amp;spec=102">Eye of Skovald</a></p>
<p dir="ltr"><a href="https://www.wowhead.com/item=198086/darkmoon-deck-inferno?class=11&amp;ilvl=418&amp;spec=102">Darkmoon Deck: Inferno</a></p>
<p dir="ltr"><a href="https://www.wowhead.com/item=137486/windscar-whetstone?bonus=1795&amp;ilvl=415&amp;spec=102">Windscar Whetstone</a></p>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">Honorable mentions for AoE:</p>
<p dir="ltr"><a href="https://www.wowhead.com/item=137485/infernal-writ?bonus=1795&amp;class=11&amp;ilvl=415&amp;spec=102">Infernal Writ</a> (also Okay for ST)</p>
<p dir="ltr"><a href="https://www.wowhead.com/item=191492/alacritous-alchemist-stone?ilvl=418&amp;spec=102">Alchemy Stone</a></p>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">Crafted Gear:</p>
<p dir="ltr">BiS Items for ST (dont need the professions to get the items)</p>
<p dir="ltr"><a href="https://www.wowhead.com/item=194898/illuminating-pillar-of-the-isles">Inscription Staff</a> with Mastery+Haste and Embelishment: <a href="https://www.wowhead.com/item=194266/pattern-bronzed-grip-wrappings">Bronzed Grip Wrappings</a></p>
<p dir="ltr">(if you craft a staff, you need 2 sparks of ingenuity, but you can only put 1 embellishment on a 2h weapon, so first 2 weeks of the raid (4 weeks into the expansion) you only have a total of 2 sparks, which means you only have 1 embellishment if you craft a 2h weapon)</p>
<p dir="ltr"><a href="https://www.wowhead.com/item=193001/elemental-lariat">Jewelcrafting Neck</a> with Embelishment&nbsp;</p>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">Bronzed grip wrappings: bad on AoE</p>
<p dir="ltr">Blue silken lining: bad if u drop below 90% hp a lot</p>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">Conclusion: If you only have 2 sparks, I recommend crafting a 1h weapon or a ring with <a href="https://www.wowhead.com/item=191532/potion-absorption-inhibitor">Pot duration</a> and JC neck (Elemental Lariat), to have 2 embellishments. But this heavily depends on which gear you get early on from raids, vault etc.&nbsp;</p>
<p dir="ltr">I recommend waiting a bit before you craft anything that requires a Spark of Ingenuity, because they are heavily timegated for the first 1-2 months and you cant get them back if you crafted an item with them already (you can only upgrade that specific item)</p>
<p dir="ltr">Can craft <a href="https://www.wowhead.com/item=193000/ring-bound-hourglass?bonus=8780:8793&amp;ilvl=418&amp;spec=102">JC Ring</a> - with Mastery and Haste and pot embellishment instead of 1h weapon as well</p>
<p><strong><br><br><br></strong></p>
<p dir="ltr">Consumables:</p>
<ul>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation">Pot: <a href="https://www.wowhead.com/item=191383/elemental-potion-of-ultimate-power">Elemental Potion of Unlimited Power</a> (this one costs primal chaos, cheaper version is <a href="https://www.wowhead.com/item=191387/elemental-potion-of-power">Elemental Potion of Power</a>)</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation">Phials: For ST: <a href="https://www.wowhead.com/item=191359/phial-of-elemental-chaos">Phial of Elemental Chaos</a> , technically the <a href="https://www.wowhead.com/item=191327/iced-phial-of-corrupting-rage">toxic crit flask</a> would be better, but only if you do content where you don&rsquo;t take a lot of dmg (so never basically) - for any AoE scenario (or ST with adds): <a href="https://www.wowhead.com/item=191333/phial-of-glacial-fury">Phial of Glacial Fury</a></p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation">Food: Intellect or Mastery+Haste</p>
</li>
</ul>
<p><strong><br><br></strong></p>
<p dir="ltr">Professions:</p>
<p dir="ltr">There are no direct player power gains from any profession.</p>
<p dir="ltr">But there are some indirect gains (survivability gains) for running Alchemy (reducing toxic effects and small heal on potion use)</p>
<p dir="ltr">Engineering: wormholes and additional tinker socket&nbsp;</p>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">Racials:</p>
<p dir="ltr">Play whatever you want, rly minor gains.</p>
<p dir="ltr">Troll/Night Elf is best though&nbsp;</p>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">Macros:</p>
<p dir="ltr">Incarn/Celestial Alignment (only works without Orbital Strike):</p>
<p dir="ltr">#showtooltip Celestial Alignment</p>
<p dir="ltr">/cast Celestial Alignment</p>
<p dir="ltr">/use Berserking(Racial)</p>
<p dir="ltr">/use 13 (this is upper trinket slot)</p>
<p dir="ltr">/use Elemental Potion of Power (or whatever other potion you have)</p>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">Incarn with Orbital Strike</p>
<p dir="ltr">#showtooltip Incarnation: Chosen of Elune(Talent, Shapeshift)</p>
<p dir="ltr">/cast [@Cursor] Incarnation: Chosen of Elune(Talent, Shapeshift)</p>
<p dir="ltr">/use Berserking(Racial)</p>
<p dir="ltr">/use 13 (this is upper trinket slot)</p>
<p dir="ltr">/use Elemental Potion of Power (or whatever other potion you have)</p>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">Convoke cancel prevention:</p>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">#showtooltip</p>
<p dir="ltr">/stopmacro [channeling: convoke the spirits]</p>
<p dir="ltr">/cast Convoke the Spirits</p>
<p dir="ltr">/cqs</p>
<p><strong id="docs-internal-guid-e68c588d-7fff-8658-61a2-98d10af202da"><br><br><br><br><br><br><br></strong></p>`;

export default MuiRteTest;
