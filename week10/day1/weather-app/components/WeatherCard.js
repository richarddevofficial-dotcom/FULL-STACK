import { motion } from "framer-motion";

export default function WeatherCard({ city, temp, description, icon }) {
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-blue-100 dark:bg-gray-800 p-6 rounded shadow text-center w-64"
    >
      <h2 className="text-2xl font-bold">{city}</h2>

      <img src={iconUrl} alt={description} className="mx-auto" />

      <p className="text-xl">{temp}°C</p>
      <p className="capitalize">{description}</p>
    </motion.div>
  );
}
