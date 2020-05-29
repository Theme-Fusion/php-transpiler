module.exports = function correctName(name) {
    var names = {
        'count': 'model.get(\'cid\')',
        'base_selector': 'baseSelector',
        'is_default': 'isDefault',
        'add_css_property': 'addCssProperty',
        'add_css_property': 'addCssProperty',
    };
    return names[name] || name;
}