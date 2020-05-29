module.exports = function correctName(name) {
    var names = {
        'args': 'values',
        'count': 'model.get(\'cid\')',
        'base_selector': 'baseSelector',
        'is_default': 'isDefault',
        'add_css_property': 'addCssProperty',
        'add_css_property': 'addCssProperty',
        'Fusion_Sanitize': 'fusionSanitize',
    };
    return names[name] || name;
}