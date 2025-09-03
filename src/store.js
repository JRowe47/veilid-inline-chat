const PREFIX = 'vic_';

function load(key, fallback) {
  const raw = localStorage.getItem(PREFIX + key);
  if (raw == null) return fallback;
  try {
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function save(key, value) {
  localStorage.setItem(PREFIX + key, JSON.stringify(value));
}

export function loadIdentity() {
  return load('identity', null);
}

export function saveIdentity(id) {
  save('identity', id);
}

export function loadContacts() {
  return load('contacts', []);
}

export function saveContacts(list) {
  save('contacts', list);
}

export function loadRooms() {
  return load('rooms', []);
}

export function saveRooms(list) {
  save('rooms', list);
}

export function addContact(contact) {
  const list = loadContacts();
  list.push(contact);
  saveContacts(list);
  return list;
}

export function removeContact(contact) {
  const list = loadContacts().filter(c => c !== contact);
  saveContacts(list);
  return list;
}

export function addRoom(room) {
  const list = loadRooms();
  list.push(room);
  saveRooms(list);
  return list;
}

export function removeRoom(room) {
  const list = loadRooms().filter(r => r !== room);
  saveRooms(list);
  return list;
}
