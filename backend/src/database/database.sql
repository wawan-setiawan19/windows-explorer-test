CREATE DATABASE explorer_db;

CREATE TABLE folders (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  parent_id BIGINT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (parent_id) REFERENCES folders(id)
);

INSERT INTO folders (name, parent_id) VALUES
('Root', NULL),
('Documents', 1),
('Pictures', 1),
('Work', 2),
('Personal', 2),
('2026', 4),
('Holiday', 3);

CREATE INDEX idx_parent_id ON folders(parent_id);
CREATE INDEX idx_name ON folders(name);

CREATE TABLE files (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  folder_id BIGINT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (folder_id) REFERENCES folders(id)
);

CREATE INDEX idx_folder_id ON files(folder_id);

INSERT INTO files (name, folder_id) VALUES
('report.pdf', 2),
('photo.jpg', 3),
('notes.txt', 4);