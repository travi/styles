module.exports = {
    icons: {
        files: [{
            expand: true,
            cwd: 'svg',
            src: ['*.svg'],
            dest: 'icons'
        }],
        options: {
            customselectors: {
                plus: ['.ui-state-default .ui-icon.icon-plus']
            }
        }
    }
};