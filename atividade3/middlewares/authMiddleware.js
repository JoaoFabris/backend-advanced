import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ mensagem: 'Acesso negado. Token não fornecido.' });
    }

    const parts = authHeader.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        return res.status(401).json({ mensagem: 'Erro no formato do Token.' });
    }

    const token = parts[1];
    const secret = process.env.JWT_SECRET || 'sua_chave_secreta';

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ mensagem: 'Token inválido ou expirado.' });
        }

        req.userId = decoded.id;
        return next();
    });
};