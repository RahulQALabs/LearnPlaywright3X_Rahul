// "other": "offWhenInlineCompletions",
    // "comments": "off",
    // "strings": "off"


    This code for autosuggestion in setting.xml. you need to replace with this line



    Option 1: Disable automatic suggestions while typing
Open Settings (Ctrl + ,).
Search for Quick Suggestions.
Turn off:
Editor: Quick Suggestions
Disable it for:
Other
Comments
Strings

Or add this to your settings.json:

"editor.quickSuggestions": {
    // "other": "offWhenInlineCompletions",
    // "comments": "off",
    // "strings": "off"
    "other": false,
    "comments": false,
    "strings": false
}