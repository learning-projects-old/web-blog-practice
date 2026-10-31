import fs from 'fs';
import path from 'path';

const root = path.resolve('src');

function walk(dir) {
	const items = fs.readdirSync(dir, { withFileTypes: true });

	for (const item of items) {
		const fullPath = path.join(dir, item.name);

		if (item.isDirectory()) {
			walk(fullPath);
			continue;
		}

		if (item.isFile() && item.name.endsWith('.js')) {
			const newPath = fullPath.replace(/\.js$/, '.jsx');

			if (fs.existsSync(newPath)) {
				console.log('Пропуск (уже есть):', newPath);
				continue;
			}

			fs.renameSync(fullPath, newPath);
			console.log('Переименовано:', fullPath, '->', newPath);
		}
	}
}

walk(root);
