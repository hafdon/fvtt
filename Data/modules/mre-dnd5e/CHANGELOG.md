# CHANGELOG

## [1.0.2] 2021-01-26

### FIXED

- Fixed an issue that would cause items without an attack roll or tool check to fail to show an item card in chat when rolled.

## [1.0.1] 2021-01-26

### ADDED

- Add a setting to toggle between skipping or showing the roll dialog when no modifier keys are held. This defaults to skipping the dialog.

### FIXED

- Fixed an issue which would cause the damage buttons to be placed above the attack button in an item card when auto roll checks was disabled.

### CHANGED

- Relaxed minimum core version to 0.7.5. This hasn't been tested, so use on versions lower than 0.7.9 at your own risk.

## [1.0.0] 2021-01-24

*First official release. No code or behavior changes*

## [0.1.5] 2021-01-20

### ADDED

- Add a setting which, when enabled, will show the total summed damage at the bottom of a combined damage card.

## [0.1.4] 2021-01-20

### ADDED

- When auto roll checks *and* auto roll damage are both enabled,
  MRE will now automatically roll critical damage when the attack roll was a critical hit.
  
### CHANGED

- Improve styling and layout when used with Tidy5e Sheet

### FIXED

- Fixed an issue where applying damage via the context menu in a damage card would incorrectly apply no damage.

## [0.1.3] 2021-01-18

### ADDED

- When the "Advantage/Critical" modifier key is held while clicking on a damage roll, the damage will be rolled as a critical

### FIXED

- Fix an issue that would cause damage buttons to appear in item cards for items with no damage formulae defined

## [0.1.2] 2021-01-17

### CHANGED

- If an item damage formula does not have a type defined, default to "Damage" for the damage type in the damage chat card.
- Prevent a user from adding more formula groups to an item if it already has 7 or more formula groups.

### FIXED

- Fix an issue that could occur if an item had a versatile formula defined, but no damage parts defined.

## [0.1.1] 2021-01-16

### ADDED

- You can now right click on individual damage rolls within an individual damage card to selectively apply damage for that roll only.

### CHANGED

- Changed the icon for the "revert to default" state of the auto rolls 3-way checkboxes to an open circle.

### FIXED

- Fixed an issue caused by programmatically calling rollAttack or rollDamage with no arguments.
- Fixed the damage type for a damage formula of type "None" displaying as "undefined".

## [0.1.0] 2021-01-15

First release!
