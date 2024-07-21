import passport from 'passport';

export default function(app) {
    app.use(passport.initialize());
    app.use(passport.session());
}
