---
sidebar_position: 1
---

# Dialogues

To explore & define concepts dialectically in concert or in collaboration with others, part of the system should allow for live creation and tuning of visualisations which are dynamically interacting with other systems & performers.

## Synthesis



## Control modalities



## Systems to interface with

Systems in use by various performers in the live music & live coding community:

- Orca
- Ableton
- TidalCycles
- OBS
- Hydra
- Strudel
- Mercury
- SuperCollider
- MacOS Screen capture


## Integration methods & protocols
- Audio
- Video
- MIDI
- UDP
- Open Sound Control [OSC](https://en.wikipedia.org/wiki/Open_Sound_Control)



## Patterns
- MIDI event -> Parameter change
- MIDI event -> Generate geometry



## Dialog/Dialectic
- Express interactions between inputs/outputs in real-time through scripting languages

## Flow

Inputs:
- Audio
- Video
- MIDI
- UDP
- OSC

Input processing:
- Per-frame interpreter
- Async/on-change interpreter


Output(s):
- Video


## Per-frame interpreter
Live javascript code which runs on each frame to interpret inputs & adjust scene parameters.
State array contains most recent MIDI/UDP/OSC events and can be flagged as processed or not.

## Async/on-change interpreter
Javascript code which runs async only when new values come in and proposes scene parameter changes, adjusted in next frame loop.




## Languages
- [Common Expression Language](https://cel.dev/)
- [Expression](https://github.com/nicklockwood/Expression)
- [Javascript](https://developer.apple.com/documentation/javascriptcore)


## Modules
- [CodeEditSourceEditor](https://github.com/CodeEditApp/CodeEditSourceEditor)


# Further reading

https://inventingsituations.net/2021/12/26/procedural-music-in-orca/

