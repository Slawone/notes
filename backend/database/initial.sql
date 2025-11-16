// ============================================
// FILE: initial.sql
// Создание таблицы в PostgreSQL
// ============================================
/*
CREATE TABLE colors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  hex_code VARCHAR(7) NOT NULL CHECK (hex_code ~ '^#[0-9A-Fa-f]{6}$'),
  created_at TIMESTAMP DEFAULT NOW()
);
*/

// ============================================
// FILE: initial.sql
// Вывести все таблицы в бд
// ============================================
/*
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
AND table_type = 'BASE TABLE';
*/

// ============================================
// FILE: initial.sql
// Вывести все поля таблицы
// ============================================
/*
SELECT * FROM table_name;
*/

// ============================================
// FILE: initial.sql
// Пример создания таблицы notes cо статусами
// ============================================
/*
-- Создаем тип для статусов
CREATE TYPE note_status AS ENUM ('новая', 'в работе', 'выполнено');

CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    text TEXT,
    status note_status DEFAULT 'новая',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP,
    tags TEXT[]
);
*/