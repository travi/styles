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
                plus: ['a.add-item span.ui-icon']
            }
        }
    }
};